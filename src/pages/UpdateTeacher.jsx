import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function UpdateTeacher() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
    const teacher = teachers.find((t) => t.id === parseInt(id));

    if (teacher) {
      setName(teacher.name);
      setSubject(teacher.subject);
      setImage(teacher.image);
    }
  }, [id]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    } else {
      toast.error("Faqat rasm yuklash mumkin!");
      setImage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
    const updatedTeachers = teachers.map((teacher) =>
      teacher.id === parseInt(id)
        ? { ...teacher, name, subject, image }
        : teacher
    );

    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
    toast.success("O‘zgartirishlar saqlandi!");

    setTimeout(() => {
      navigate(`/teachers/${id}`);
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <Toaster />
      <h2 className="text-2xl font-semibold text-center mb-6">Update Teacher</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Ism"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />

        <input
          type="text"
          placeholder="Fan"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />

        <div className="flex flex-col space-y-2">
          <label className="font-medium">Rasm yuklang:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="w-full"
          />
          {image && (
            <div className="relative mt-2">
              <img
                src={image}
                alt="preview"
                className="w-32 h-32 object-cover border rounded"
              />
              <button
                type="button"
                onClick={() => setImage(null)}
                className="absolute -top-2 -right-2 bg-red-500 text-white px-2 rounded-full"
              >
              </button>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Saqlash
        </button>
      </form>
    </div>
  );
}

export default UpdateTeacher;
