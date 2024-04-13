function Profile() {
  return (
    <div>
      <div className="row container text-center row row-cols-5">
        <div className="card col ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/da/Purple_flower_(4764445139).jpg"
            className="img-thumbnail"
            alt="Profile"
          />
          <div className="card-body">
            <h5 className="card-title"> User Name </h5>
            <p>Sainadhachary</p>
          </div>
        </div>
      </div>

      <center>
        <h5 className="text-white bg-dark m-1 p-2"> Your Order</h5>
        <a href="/ord">
          <p></p>
        </a>
      </center>
      <br />
      <br />

      <center>
        <h5 className="text-white bg-dark m-1 p-2"> Buy Again</h5>
        <a href="/buy">
          <p></p>
        </a>
      </center>
      <br />
      <br />
      <center>
        <h5 className="text-white bg-dark m-1 p-2"> Your Account</h5>
        <a href="/ya">
          <p></p>
        </a>
      </center>
      <br />
      <br />
      <center>
        <h5 className="text-white bg-dark m-1 p-2"> Your Lists</h5>
        <div className="text-white">
          <h6>From your lists</h6>
          <p>As you save more items,we will group them into categories for you.</p>
          <h6>Your lists and registries</h6>
          </div>

        
      </center>
    </div>
  );
}
export default Profile;
