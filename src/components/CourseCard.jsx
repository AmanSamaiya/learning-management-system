import { useNavigate } from "react-router-dom";

function CourseCard({ data }) {
  const navigate = useNavigate();

  return (
    <div 
    onClick={()=> navigate("/course/description" , {state : {...data}})}
    className=" text-white w-[22rem] h-[430px] shadow-lg rounded-lg cursor-pointer bg-zinc-700 overflow-hidden">
      <div className=" overflow-hidden">
        <img
          src={data?.thumbnail?.secure_url}
          className="rounded-tl-lg rounded-tr-lg h-48 w-full group-hover:scale=[1,2] transition-all ease-in-out duration-300"
          alt="course thumbnail"
        />
        <div className=" p-3 space-y-1 text-white">
          <h2 className=" text-xl font-bold text-yellow-500 line-clamp-2">
            {data?.title}
          </h2>
          <p className=" line-clamp-2">{data.description}</p>
          <p className=" font-semibold">
            Category :{" "}
            <span className=" font-bold text-yellow-500">{data?.category}</span>
          </p>
          <p className=" font-semibold">
            Instructor :{" "}
            <span className=" font-bold text-yellow-500">{data?.createdBy}</span>
          </p>
          <p className=" font-semibold">
            Total Lectures :{" "}
            <span className=" font-bold text-yellow-500">{data?.numberOfLectures}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
