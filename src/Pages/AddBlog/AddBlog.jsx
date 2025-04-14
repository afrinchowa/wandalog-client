import Swal from "sweetalert2";

const AddBlog = () => {
  const handleAddBlog = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const content = form.content.value;
    const location = form.location.value;
    const dateOfTravel = form.dateOfTravel.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;

    const newBlog = { title, content, location, dateOfTravel, category, details, photoURL };
    console.log(newBlog);

    fetch("http://localhost:5000/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "You added the Blog",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset(); // Clears the form after submission
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="bg-slate-400 p-24">
      <h1 className="text-3xl font-extrabold">Post a Blog</h1>
      <form onSubmit={handleAddBlog}>
        {/* form title and content row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Blog Title</legend>
              <input type="text" name="title" className="input input-bordered w-full" placeholder="Blog Title" required />
            </fieldset>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Blog Content</legend>
              <input type="text" name="content" className="input input-bordered w-full" placeholder="Blog Content" required />
            </fieldset>
          </div>
        </div>

        {/* form location and date of travel row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Blog Location</legend>
              <input type="text" name="location" className="input input-bordered w-full" placeholder="Blog Location" required />
            </fieldset>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Date of Travel</legend>
              <input type="date" name="dateOfTravel" className="input input-bordered w-full" required />
            </fieldset>
          </div>
        </div>

        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Blog Category</legend>
              <input type="text" name="category" className="input input-bordered w-full" placeholder="Blog Category" required />
            </fieldset>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Blog Details</legend>
              <textarea name="details" className="textarea textarea-bordered w-full" placeholder="Blog Details" required></textarea>
            </fieldset>
          </div>
        </div>

        {/* form photo URL row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Blog Photo URL</legend>
              <input type="url" name="photoURL" className="input input-bordered w-full" placeholder="Blog Photo URL" required />
            </fieldset>
          </div>
        </div>

        <input type="submit" value="Add Blog" className="btn btn-block bg-slate-500 text-white hover:text-black hover:bg-slate-100" />
      </form>
    </div>
  );
};

export default AddBlog;
