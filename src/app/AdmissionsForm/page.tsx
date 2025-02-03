"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AdmissionsForm() {
  const [step, setStep] = useState(1);

  // Step Indicators
  const steps = [
    "Student Information",
    "Parent/Guardian Information",
    "Family Information",
    "Academic Information",
    "Required Documents",
  ];

  const nextStep = () => {
    if (step < steps.length) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-28 pb-24 px-8 relative overflow-x-hidden"
    >
      {/* Background Animated Blobs */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-200 mix-blend-multiply filter blur-xl animate-blob"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-200 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold gradient-text mb-8"
        >
          Application Form
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg mb-12"
        >
          Please fill out the form below to complete your application.
        </motion.p>

        {/* Step Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {steps.map((label, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>

        {/* Form Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto"
        >
          {/* Step 1: Student Information */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-6">
                STEP 1: Student Information
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="date"
                  placeholder="Date of Birth (YYYY-MM-DD)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="mr-2"
                    />{" "}
                    Male
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="mr-2"
                    />{" "}
                    Female
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      className="mr-2"
                    />{" "}
                    Other
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Nationality"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Home Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Mailing Address (if different)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Current Grade/Level"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Applying for Grade/Level"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Previous School (if applicable)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  placeholder="Special Needs or Accommodations (if any)"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </form>
            </div>
          )}

          {/* Step 2: Parent/Guardian Information */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-6">
                STEP 2: Parent/Guardian Information
              </h2>
              <form className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  Parent/Guardian 1:
                </h3>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Relationship to Student"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Occupation"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <h3 className="text-lg font-semibold text-gray-700 mt-6">
                  Parent/Guardian 2:
                </h3>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Relationship to Student"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Occupation"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </form>
            </div>
          )}

          {/* Step 3: Family Information */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-6">
                STEP 3: Family Information
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Marital Status of Parents/Guardians"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="number"
                  placeholder="Number of Siblings"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Languages Spoken at Home"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </form>
            </div>
          )}

          {/* Step 4: Academic Information */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-6">
                STEP 4: Academic Information
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="List any academic awards or achievements"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  placeholder="Briefly describe your child's academic strengths and weaknesses"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="academicSupport"
                      value="yes"
                      className="mr-2"
                    />{" "}
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="academicSupport"
                      value="no"
                      className="mr-2"
                    />{" "}
                    No
                  </label>
                </div>
                <textarea
                  placeholder="If yes, please explain"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </form>
            </div>
          )}

          {/* Step 5: Required Documents */}
          {step === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-6">
                STEP 5: Required Documents
              </h2>
              <form className="space-y-6">
                {/* Birth Certificate */}
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="birthCertificate"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Copy of Birth Certificate
                  </label>
                  <input
                    type="file"
                    id="birthCertificate"
                    name="birthCertificate"
                    accept=".pdf, .jpg, .jpeg, .png"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                  />
                </div>

                {/* Immunization Records */}
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="immunizationRecords"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Copy of Immunization Records
                  </label>
                  <input
                    type="file"
                    id="immunizationRecords"
                    name="immunizationRecords"
                    accept=".pdf, .jpg, .jpeg, .png"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                  />
                </div>

                {/* Passport-Sized Photographs */}
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="passportPhotographs"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Recent Passport-Sized Photographs (2)
                  </label>
                  <input
                    type="file"
                    id="passportPhotographs"
                    name="passportPhotographs"
                    accept=".jpg, .jpeg, .png"
                    multiple
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                  />
                </div>

                {/* Academic Transcripts/Reports */}
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="academicTranscripts"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Academic Transcripts/Reports from Previous School(s)
                  </label>
                  <input
                    type="file"
                    id="academicTranscripts"
                    name="academicTranscripts"
                    accept=".pdf, .jpg, .jpeg, .png"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  Submit Form
                </button>
              </form>
            </div>
          )}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-around mt-8">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`px-6 py-2 rounded-full ${
              step === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            } transition-colors duration-300`}
          >
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={step === steps.length}
            className={`px-6 py-2 rounded-full ${
              step === steps.length
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            } transition-colors duration-300`}
          >
            {step === steps.length ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </motion.section>
  );
}
