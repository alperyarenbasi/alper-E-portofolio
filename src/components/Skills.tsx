import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section className="py-20 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-light mb-16 text-center"
        >
          Technical <span className="font-bold">Expertise</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-[#007AFF]"
                  />
                </div>
                <div className="mt-2 text-sm text-white/60">
                  {skill.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}