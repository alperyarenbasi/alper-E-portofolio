import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-16">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-light mb-16 text-center">
            Hey, pleased you want to know <span className="font-bold">more about me</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/me.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/yellowBuilding.jpg"
                  alt="Hobby"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="prose prose-lg">
                <h2 className="text-2xl font-bold mb-4">The Journey</h2>
                <p className="text-gray-600">
                  As a student of Cybernetics and Robotics Engineering with a parallel pursuit in Computer Science, 
                  I'm passionate about bridging the gap between human intelligence and machine capabilities.
                </p>
              </div>

              <div className="prose prose-lg">
                <h2 className="text-2xl font-bold mb-4">Hobbies & Interests</h2>
                <p className="text-gray-600">
                  When I'm not coding or working with robots, you'll find me [Your Hobbies]. 
                  I believe in maintaining a balance between technical expertise and creative pursuits.
                </p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}