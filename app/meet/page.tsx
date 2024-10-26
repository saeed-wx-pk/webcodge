"use client"
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"
import { toast } from '@/hooks/use-toast';


const page = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    description: '',
    userIntrestry: '',
    phNumber:'',
    isHaveWeb: '',
    webUrl:'',
    challenge:''
  });

  const [invalidFields, setInvalidFields] = useState({
    name: false,
    email: false,
    userType: false,
    description: false,
    userIntrestry: false,
    phNumber:false,
    isHaveWeb: false,
    webUrl:false,
    challenge:false,
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset the invalid state for the changed field
    setInvalidFields((prev) => ({ ...prev, [name]: false }));
  };

  // Validate form fields before moving to the next step
  const nextStep = () => {
    const newInvalidFields = {
      name: !formData.name,
      email: !formData.email,
      userType: step === 2 && !formData.userType,
      isHaveWeb: step === 2 && formData.userType === 'Startup Creator' && !formData.isHaveWeb,
      webUrl: step === 2 && formData.userType === 'Startup Creator' && formData.isHaveWeb === 'Have Website' && !formData.webUrl,
      challenge: step === 2 && formData.userType === 'Startup Thinker' && !formData.challenge,
      phNumber: step === 1 && (!formData.phNumber || formData.phNumber.length < 10),
      userIntrestry: step === 3 && !formData.userIntrestry,
      description: step === 3 && !formData.description,
    };

    setInvalidFields(newInvalidFields);

    if (!Object.values(newInvalidFields).includes(true)) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/meet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Slot booked successfully');
        toast({
          title: "Slot booked successfully",
          description: "Thanks For Your Order",
        })
        setFormData({
          name: '',
          email: '',
          userType: '',
          description: '',
          userIntrestry: '',
          isHaveWeb: '',
          webUrl:'',
          phNumber:'',
          challenge:''
        })
        setStep(1)
      } else {
        console.error('Failed to book slot');
        toast({
          title: "Failed to book slot",
          description: "Please try again",
        })
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="mt-40 flex justify-center items-center mb-32">
      <div className="h-fit bg-gradient-to-br rounded-3xl from-foreground to-background w-[95vw] sm:w-[20rem] p-10 md:p-20 md:w-[50rem] text-center">
        <div className="text-grad text-2xl md:text-5xl">
        Empower Your Startup or Idea's Digital Presence for Growth—Free!
        </div>
        <div className="text-lg text-gray-500 mt-5 mb-10 ">
          At WebCodge, Join us for an exclusive meet-up designed for startup creators and thinkers. Whether you have a business or just a brilliant idea, discover strategies to boost your brand online and grow in the digital world.
          <br /><span className="text-sm text-gray-400">Fill out this for join the meet</span>
        </div>
        
        {step === 1 && (
          <form>
            <div className="space-y-4 ">
              <h2 className="text-lg text-gray-300 font-semibold">Step 1: Personal Information</h2>
              <div className={`flex items-center bg-black rounded-full p-2 ${invalidFields.name ? 'border border-red-500' : ''}`}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent text-gray-300 h-12 placeholder-gray-500 outline-none px-4 py-2 w-full"
                  required
                />
              </div>

              <div className={`flex items-center bg-black rounded-full p-2 ${invalidFields.email ? 'border border-red-500' : ''}`}>
                <input
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent text-gray-300 h-12 placeholder-gray-500 outline-none px-4 py-2 w-full"
                  required
                />
              </div>

              <div className={`flex items-center bg-black rounded-full p-2 ${invalidFields.phNumber ? 'border border-red-500' : ''}`}>
                  <input
                    type="number"
                    name="phNumber"
                    placeholder="Your Contact Number"
                    value={formData.phNumber}
                    onChange={handleChange}
                    className="bg-transparent text-gray-300 h-12 placeholder-gray-500 outline-none px-4 py-2 w-full"
                    required
                  />
                </div>
            </div>

            <button
              type="button"
              className="glow-btn w-full bg-light_green text-gray-900 font-semibold px-10 py-5 rounded-full mt-6"
              onClick={nextStep}
            >
              Next
            </button>
          </form>
        )}

        {step === 2 && (
          <form>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Step 2: Identify Your Role</h2>

              <div className={`flex items-center bg-black rounded-full p-2 ${invalidFields.userType ? 'border border-red-500' : ''}`}>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, userType: value }))}>
                  <SelectTrigger className="bg-transparent text-gray-300 h-12 placeholder-gray-500 border-none outline-none px-4 py-2 w-full">
                    <SelectValue placeholder="Are You a Startup Creator or Thinker?" />
                  </SelectTrigger>
                  <SelectContent className='bg-black text-gray-300 border-none'>
                    <SelectGroup>
                      <SelectItem value="Startup Creator" className="hover:bg-gray-400">Startup Creator</SelectItem>
                      <SelectItem value="Startup Thinker" className="hover:bg-gray-400">Startup Thinker</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                
              </div>
              {formData.userType === 'Startup Creator' && (
                <div className="">
                  <div className={`flex items-center bg-black rounded-full p-2 ${invalidFields.isHaveWeb ? 'border border-red-500' : ''}`}>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, isHaveWeb: value }))}>
                      <SelectTrigger className="bg-transparent text-gray-300 h-12 placeholder-gray-500 border-none outline-none px-4 py-2 w-full">
                        <SelectValue placeholder="Have you a website for your company" />
                      </SelectTrigger>
                      <SelectContent className='bg-black text-gray-300 border-none'>
                        <SelectGroup>
                          <SelectItem value="Have Website" className="hover:bg-gray-400">Yes I have a Website</SelectItem>
                          <SelectItem value="Haven't Website" className="hover:bg-gray-400">No I haven't a Website</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  {formData.isHaveWeb === 'Have Website' && (
                    <div className={`flex mt-5 items-center bg-black rounded-full p-2 ${invalidFields.webUrl ? 'border border-red-500' : ''}`}>
                      <input
                        type="text"
                        name="webUrl"
                        placeholder="Current Website Url"
                        value={formData.webUrl}
                        onChange={handleChange}
                        className="bg-transparent text-gray-300 h-12 placeholder-gray-500 outline-none px-4 py-2 w-full"
                        required
                      />
                    </div>
                  )}
                </div>
              )}
              {formData.userType === 'Startup Thinker' && (
                <div className={`flex items-center bg-black rounded-full p-2 ${invalidFields.challenge ? 'border border-red-500' : ''}`}>
                  <input
                    type="text"
                    name="challenge"
                    placeholder="Share your current challenges in developing your idea"
                    value={formData.challenge}
                    onChange={handleChange}
                    className="bg-transparent text-gray-300 h-12 placeholder-gray-500 outline-none px-4 py-2 w-full"
                    required
                  />
                </div>
              )}
                
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="glow-btn bg-light_green text-gray-900 font-semibold px-6 py-3 rounded-full"
                onClick={prevStep}
              >
                Previous
              </button>

              <button
                type="button"
                className="glow-btn bg-light_green text-gray-900 font-semibold px-6 py-3 rounded-full"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Step 3: Project field & Description</h2>

              <div className={`flex items-center bg-black rounded-full p-2 ${invalidFields.userIntrestry ? 'border border-red-500' : ''}`}>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, userIntrestry: value }))}>
                      <SelectTrigger className="bg-transparent text-gray-300 h-12 placeholder-gray-500 border-none outline-none px-4 py-2 w-full">
                        <SelectValue placeholder="Select Sub-Service Type" />
                      </SelectTrigger>
                      <SelectContent className='bg-black text-gray-300 border-none'>
                        <SelectGroup>
                          <SelectItem value="Tech" className="hover:bg-gray-400">Tech</SelectItem>
                          <SelectItem value="Health" className="hover:bg-gray-400">Health</SelectItem>
                          <SelectItem value="Education" className="hover:bg-gray-400">Education</SelectItem>
                          <SelectItem value="Retail" className="hover:bg-gray-400">Retail</SelectItem>
                          <SelectItem value="Finance" className="hover:bg-gray-400">Finance</SelectItem>
                          <SelectItem value="Other" className="hover:bg-gray-400">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
              </div>
              <div className={`flex items-center bg-black rounded-lg p-2 ${invalidFields.description ? 'border border-red-500' : ''}`}>
                <textarea
                  name="description"
                  placeholder="Describe your project"
                  value={formData.description}
                  onChange={handleChange}
                  className="bg-transparent text-gray-300 h-28 placeholder-gray-500 outline-none px-4 py-2 w-full"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="glow-btn bg-light_green text-gray-900 font-semibold px-6 py-3 rounded-full"
                onClick={prevStep}
              >
                Previous
              </button>

              <button
                type="submit"
                className="glow-btn bg-light_green text-gray-900 font-semibold px-6 py-3 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default page;

