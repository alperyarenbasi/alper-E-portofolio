import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const universities = [
  {
    name: "NTNU: Norwegian University of Science and Technology",
    degree: "MEng in Cybernetics and Robotics",
    period: "Expected 2028",
    courses: [
      "Embeded Systems",
      "Computer Architecture",
      "Methods in AI",
      "Phd course: Advanced Computing"
    ]
  },
  {
    name: "University of Oslo",
    degree: "BSc in Computer Science",
    period: "2023 - Present",
    courses: [
      "Algorithms and Data Structures",
      "Computation and Complexity",
      "Databases",
      "Discrete Mathematics"
    ]
  },
  {
    name: "University of Bergen",
    degree: "MEng in Data Science",
    period: "2023 - Present(?)",
    courses: [
      "Python",
      "Java",
      "-",
      "-"
    ]
  }
];

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-16">
      <div className="container mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-light mb-16 text-center"
        >
          My <span className="font-bold">Education</span> <br />
          <p className="text-sm text-gray-600 mt-2">
          I am eager to combine my passions for Cybernetics and Computer Science. While I am currently exploring different fields, I have a strong interest in Data Science. 
          <br />However, I am also considering other areas such as Aerospace, Economics, or Statistics as potential future directions.
          </p>
        </motion.h1>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

            {/* Universities */}
            {universities.map((uni, index) => (
              <motion.div
                key={uni.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative mb-16 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#007AFF]" />

                <div className="ml-16 bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{uni.name}</h2>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <GraduationCap className="w-4 h-4" />
                          <span>{uni.degree}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{uni.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="flex items-center space-x-2 text-lg font-semibold mb-3">
                      <BookOpen className="w-5 h-5" />
                      <span>Key Courses</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {uni.courses.map((course) => (
                        <div
                          key={course}
                          className="px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-600"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}