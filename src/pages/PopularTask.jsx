import { MdWorkOutline, MdDesignServices, MdCode, MdLanguage, MdBuild, MdMoreHoriz } from 'react-icons/md';

const tasks = [
  { name: 'Development', count: 24, icon: <MdCode size={28} /> },
  { name: 'Design', count: 18, icon: <MdDesignServices size={28} /> },
  { name: 'Writing', count: 12, icon: <MdWorkOutline size={28} /> },
  { name: 'Translation', count: 9, icon: <MdLanguage size={28} /> },
  { name: 'Engineering', count: 7, icon: <MdBuild size={28} /> },
  { name: 'Others', count: 5, icon: <MdMoreHoriz size={28} /> },
];

const PopularTasks = () => {
  return (
    <section className="py-16  rounded-lg mx-auto bg-white">
      <div className="max-w-6xl  mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">Popular Task Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="group shadow-lg rounded-xl p-6 flex items-center gap-4 cursor-pointer
                         border border-blue-800 hover:bg-blue-400 transition-colors duration-300"
            >
              <div className="bg-blue-100 text-blue-800 rounded-lg p-3 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                {task.icon}
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-blue-800 group-hover:text-white transition-colors duration-300">
                  {task.name}
                </h4>
                <p className="text-sm text-blue-600 group-hover:text-yellow-200 transition-colors duration-300">
                  ({task.count} tasks)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTasks;
