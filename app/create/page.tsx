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
    serviceType: '',
    description: '',
    timeline: '',
    phNumber:'',
    webDevType: '',
    currentUrl:''
  });

  const [invalidFields, setInvalidFields] = useState({
    name: false,
    email: false,
    serviceType: false,
    description: false,
    timeline: false,
    phNumber:false,
    webDevType: false,
    currentUrl:false,
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
      serviceType: step === 2 && !formData.serviceType,
      webDevType: step === 2 && !formData.webDevType && formData.serviceType === 'Web Development',
      currentUrl: step === 2 && !formData.currentUrl && formData.serviceType === 'Web Updation' || formData.serviceType === 'SEO',
      phNumber: step === 2 && !formData.phNumber,
      timeline: step === 3 && !formData.timeline,
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
      const response = await fetch('/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Order submitted successfully');
        toast({
          title: "Order submitted successfully",
          description: "Thanks For Your Order",
        })
        setFormData({
          name: '',
          email: '',
          serviceType: '',
          description: '',
          timeline: '',
          webDevType: '',
          currentUrl:'',
          phNumber:'',
        })
        setStep(1)
      } else {
        console.error('Failed to submit order');
        toast({
          title: "Failed to submit order",
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
          Bring Your Vision to Life with $29!
        </div>
        <div className="text-lg text-gray-500 mt-5 mb-10 ">
          At WebCodge, we tailor web solutions to meet your unique needs. Ready to get started? Simply select the services that match your vision, and we'll take care of the rest.
        </div>
        
        {step === 1 && (
          <form>
            <div className="space-y-4 ">
              <h2 className="text-lg text-gray-300 font-semibold">Step 1: Basic Information</h2>
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
              <h2 className="text-lg font-semibold">Step 2: Service Details</h2>

              <div className={`flex items-center bg-black rounded-full p-2 ${invalidFields.serviceType ? 'border border-red-500' : ''}`}>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceType: value }))}>
                  <SelectTrigger className="bg-transparent text-gray-300 h-12 placeholder-gray-500 border-none outline-none px-4 py-2 w-full">
                    <SelectValue placeholder="Select Service Type" />
                  </SelectTrigger>
                  <SelectContent className='bg-black text-gray-300 border-none'>
                    <SelectGroup>
                      <SelectItem value="Web Development" className="hover:bg-gray-400">Web Development with SEO</SelectItem>
                      <SelectItem value="Web Updation" className="hover:bg-gray-400">Website Updation with SEO</SelectItem>
                      <SelectItem value="SEO" className="hover:bg-gray-400">SEO Services</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {formData.serviceType === 'Web Development' && (
                <div className={`flex items-center bg-black rounded-full p-2 ${invalidFields.webDevType ? 'border border-red-500' : ''}`}>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, webDevType: value }))}>
                    <SelectTrigger className="bg-transparent text-gray-300 h-12 placeholder-gray-500 border-none outline-none px-4 py-2 w-full">
                      <SelectValue placeholder="Select Sub-Service Type" />
                    </SelectTrigger>
                    <SelectContent className='bg-black text-gray-300 border-none'>
                      <SelectGroup>
                        <SelectItem value="Landing Page" className="hover:bg-gray-400">Landing Page - 2 Pages</SelectItem>
                        <SelectItem value="Multi Pages" className="hover:bg-gray-400">Multi Pages</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              )}
              {(formData.serviceType === 'Web Updation' || formData.serviceType === 'SEO') && (
                <div className={`flex items-center bg-black rounded-full p-2 ${invalidFields.currentUrl ? 'border border-red-500' : ''}`}>
                    <input
                    type="text"
                    name="currentUrl"
                    placeholder="Current Website Url"
                    value={formData.currentUrl}
                    onChange={handleChange}
                    className="bg-transparent text-gray-300 h-12 placeholder-gray-500 outline-none px-4 py-2 w-full"
                    required
                  />
                </div>
              )}
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
              <h2 className="text-lg font-semibold">Step 3: Project Timeline & Description</h2>

              <div className={`flex items-center bg-black rounded-full p-2 ${invalidFields.timeline ? 'border border-red-500' : ''}`}>
                
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}>
                    <SelectTrigger className="bg-transparent text-gray-300 h-12 placeholder-gray-500 border-none outline-none px-4 py-2 w-full">
                      <SelectValue placeholder="Expected Timeline (weeks)" />
                    </SelectTrigger>
                    <SelectContent className='bg-black text-gray-300 border-none'>
                      <SelectGroup>
                        <SelectItem value="2" className="hover:bg-gray-400">1 Week</SelectItem>
                        <SelectItem value="2" className="hover:bg-gray-400">2 Weeks</SelectItem>
                        <SelectItem value="3" className="hover:bg-gray-400">3 Weeks</SelectItem>
                        <SelectItem value="3" className="hover:bg-gray-400">4 Weeks</SelectItem>
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
