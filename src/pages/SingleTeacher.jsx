import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleTeacher() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
    const selectedTeacher = teachers.find((teacher) => teacher.id === parseInt(id));
    setTeacher(selectedTeacher);
  }, [id]);

  if (!teacher) {
    return (
      <div className="text-center text-red-500">
        <p>O‘qituvchi topilmadi.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Teacher Details</h2>

      <div className="text-center">
        <img
          src={teacher.image}
          alt="teacher"
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-medium">{teacher.name}</h3>
        <p className="text-gray-600">{teacher.subject}</p>
      </div>

      <div className="mt-6">
        <button
          onClick={() => navigate("/teachers")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full mt-4"
        >
          Back to Teachers List
        </button>
      </div>
    </div>
  );
}

export default SingleTeacher;
