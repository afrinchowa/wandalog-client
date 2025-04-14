import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {
  // Fix: Load blog data first before destructuring
  const blog = useLoaderData();
  const {
    _id,
    title,
    content,
    location,
    dateOfTravel,
    category,
    details,
    photoURL,
  } = blog;

  const handleUpdateBlog = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedBlog = {
      title: form.title.value,
      content: form.content.value,
      location: form.location.value,
      dateOfTravel: form.dateOfTravel.value,
      category: form.category.value,
      details: form.details.value,
      photoURL: form.photoURL.value,
    };

    fetch(`http://localhost:5000/blog/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Fix: Correct modifiedCount check
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "You updated the Blog",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="bg-slate-400 p-24">
      {/* Fix: Use title instead of undefined name */}
      <h1 className="text-3xl font-extrabold">Update the Blog: {title}</h1>
      <form onSubmit={handleUpdateBlog}>
        {/* Blog Title and Content */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Blog Title</legend>
              <input
                type="text"
                name="title"
                className="input input-bordered w-full"
                defaultValue={title}
                required
              />
            </fieldset>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Blog Content</legend>
              <input
                type="text"
                name="content"
                className="input input-bordered w-full"
                defaultValue={content}
                required
              />
            </fieldset>
          </div>
        </div>

        {/* Location and Date of Travel */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Blog Location</legend>
              <input
                type="text"
                name="location"
                className="input input-bordered w-full"
                defaultValue={location}
                required
              />
            </fieldset>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Date of Travel</legend>
              <input
                type="date"
                name="dateOfTravel"
                className="input input-bordered w-full"
                defaultValue={dateOfTravel}
                required
              />
            </fieldset>
          </div>
        </div>

        {/* Category and Details */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Blog Category</legend>
              <input
                type="text"
                name="category"
                className="input input-bordered w-full"
                defaultValue={category}
                required
              />
            </fieldset>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Blog Details</legend>
              <textarea
                name="details"
                className="textarea textarea-bordered w-full"
                defaultValue={details}
                required
              ></textarea>
            </fieldset>
          </div>
        </div>

        {/* Photo URL */}
        <div className="mb-8">
          <div className="form-control w-full">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Blog Photo URL</legend>
              <input
                type="url"
                name="photoURL"
                className="input input-bordered w-full"
                defaultValue={photoURL}
                required
              />
            </fieldset>
          </div>
        </div>

        <input
          type="submit"
          value="Update Blog"
          className="btn btn-block bg-slate-500 text-white hover:text-black hover:bg-slate-100"
        />
      </form>
    </div>
  );
};

export default UpdateBlog;
