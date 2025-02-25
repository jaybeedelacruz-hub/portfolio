export const ProjectCard = ({ projectName, projectDescription }) => {
  return (
    <>
      <div class="p-6 rounded-lg shadow-sm bg-red-800 border-red-700">
        <a href="#">
          <h5 class="mb-6 text-2xl font-bold tracking-tight text-white">
            {projectName}
          </h5>
        </a>
        <p class="mb-3 font-normal text-white">{projectDescription}</p>
      </div>
    </>
  );
};
