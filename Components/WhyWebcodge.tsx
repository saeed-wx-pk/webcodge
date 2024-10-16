import React from 'react'

const WhyWebcodge = () => {
  return (
    <section className="bg-[#121212] w-fit mx-auto mt-10 rounded-3xl py-12" id="why-webcodge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-grad mx-auto w-fit text-3xl md:text-6xl max-w-[25ch] text-center font-bold mt-8">
          Why WebCodge ?
        </div>
        <p className="mt-4 text-lg leading-6 text-gray-500 max-w-2xl mx-auto">
          At WebCodge, we are committed to delivering web development solutions
          that are responsive, dynamic, and fully customized to your business needs. 
          Here's why you should choose us for your next project:
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#181818] p-6  shadow-lg rounded-xl">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#df0] text-white mb-4">
            {/* Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="black" // Set to black
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.75 16L9 16.75c-.45.45-.675.675-.938 1.337-.2.494-.337 1.26-.337 2.238H7c-1.1 0-2-.9-2-2v-1h14v1c0 1.1-.9 2-2 2h-.375c0-.978-.138-1.744-.338-2.238-.263-.662-.488-.887-.938-1.337L14.25 16H9.75zM4 4.25C4 3.56 4.56 3 5.25 3h13.5c.69 0 1.25.56 1.25 1.25v11.5c0 .69-.56 1.25-1.25 1.25H5.25C4.56 17 4 16.44 4 15.75V4.25z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-200">Responsive Design</h3>
          <p className="mt-2 text-gray-600">
            We ensure your website works flawlessly across all devices, enhancing 
            user experience and engagement.
          </p>
        </div>

        <div className="bg-[#181818] p-6  shadow-lg rounded-lg">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#df0] text-white mb-4">
            {/* Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="black" // Changed to black
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-200">SEO Optimization</h3>
          <p className="mt-2 text-gray-600">
            We implement the latest SEO strategies to ensure your website ranks 
            higher on search engines and reaches your target audience.
          </p>
        </div>

        <div className="bg-[#181818] p-6  shadow-lg rounded-lg">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#df0] text-white mb-4">
            {/* Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="black" // Changed to black
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v8m4-4H8"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-200">Custom Solutions</h3>
          <p className="mt-2 text-gray-600">
            We offer tailored web solutions that fit your specific business needs, 
            ensuring you stand out from the competition.
          </p>
        </div>
      </div>
    </section>

  )
}

export default WhyWebcodge
