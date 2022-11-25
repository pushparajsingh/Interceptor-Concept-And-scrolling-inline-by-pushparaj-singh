import React, { useEffect } from "react";
import { instance } from "../../Service/Config";
import { useState } from "react";
import Slider from "react-slick";

const TestimonialCard = () => {
  const [state, setState] = useState();
  const [change, setChange] = useState({ check: true, id: "" });

  const [data, setData] = useState({
    Photo: "",
    Name: "",
    Post: "",
    Description: "",
    Active: 0,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    getTestimonialList();
    console.log("getTestimonial");
  }, []);

  const getTestimonialList = async () => {
    const result = await instance.get("all");
    try {
      if (result?.data) {
        setState(result?.data);
      }
    } catch (error) {
      console.log("list", error);
    }
  };

  function changeHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function submitForm() {
    console.log(data);
    var formData = new FormData();
    formData.append("Photo", data?.Photo);
    formData.append("Name", data?.Name);
    formData.append("Post", data?.Post);
    formData.append("Description", data?.Description);
    formData.append("Active", 1);

    instance
      .post("post", formData)
      .then(() => {
        getTestimonialList();
      })
      .catch((err) => console.log(333, err));
  }

  async function submitForm() {
    console.log(444, data);
    const multipleData = new FormData();
    multipleData.append("Photo", data?.Photo);
    multipleData.append("Name", data?.Name);
    multipleData.append("Post", data?.Post);
    multipleData.append("Description", data?.Description);
    multipleData.append("Active", data?.Active === true ? 1 : 0);

    const createTestimonial = await instance.post("post", multipleData);
    try {
      if (createTestimonial?.data) {
        getTestimonialList();
      }
    } catch (error) {
      console.log(777779999999, error);
    }
  }

  async function deletePost(id) {
    const deleteData = await instance.delete(`delete/${id}`);
    try {
      if (deleteData?.data) {
        getTestimonialList();
      }
    } catch (err) {
      console.log(777779999999, err);
    }
  }

  async function editPost() {
    const multiData = new FormData();
    multiData.append("Photo", data?.Photo);
    multiData.append("Name", data?.Name);
    multiData.append("Post", data?.Post);
    multiData.append("Description", data?.Description);
    multiData.append("Active", data?.Active === true ? 1 : 0);

    const results = await instance.put(`update/${change.id}`, multiData);
    try {
      if (results?.data) {
        getTestimonialList();
      }
    } catch (error) {
      console.log(777779999999, error);
    }
  }

  function editData(item) {
    setChange({ check: false, id: item });
    instance
      .get(`get/${item}`)
      .then((result) => {
        console.log(555, result.data);
        setData({ ...result.data });
      })
      .catch((err) => console.log(333, err));
  }
  return (
    <>
      <section id="testimonial" className="testimonial-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-10">
                <h4 className="title">Testimonial</h4>
                <p className="text">
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#myModal"
          >
            Create Post
          </button>
          <div>
            <Slider {...settings}>
              {state?.map((item) => {
                return (
                  <div>
                    <div className="single-testimonial mt-30 mb-30 text-center">
                      <div className="testimonial-image">
                        <img
                          src={"https://dssdssd.herokuapp.com/" + item.filePath}
                          alt="Author"
                        />
                      </div>
                      <div className="testimonial-content">
                        <p className="text">
                          Stop wasting time and money designing and managing a
                          website that doesn't get results. Happiness
                          guaranteed! Stop wasting time and money designing and
                          managing a website that doesn't get results. Happiness
                          guaranteed! {item.Description}
                        </p>
                        <h6 className="author-name">{item.Name}</h6>
                        <span className="sub-title">{item.Post}</span> <br />
                        <button
                          className="btn btn-danger"
                          onClick={() => deletePost(item._id)}
                        >
                          Delete
                        </button>{" "}
                        &nbsp;
                        <button
                          className="btn btn-success"
                          onClick={() => {
                            editData(item._id);
                          }}
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
      <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">
              <form class="form-horizontal" action="/action_page.php">
                <div class="form-group">
                  <label class="control-label col-sm-2" for="email">
                    Name
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control ml-5"
                      id="email"
                      placeholder="Enter Name"
                      name="Name"
                      value={data.Name}
                      onChange={(e) => {
                        changeHandler(e);
                      }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2 " for="pwd">
                    Post
                  </label>
                  <div class="col-sm-10 ml-5">
                    <input
                      type="text"
                      class="form-control"
                      id="pwd"
                      placeholder="Enter Post"
                      name="Post"
                      value={data.Post}
                      onChange={(e) => {
                        changeHandler(e);
                      }}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2 " for="pwdD">
                    Description
                  </label>
                  <div class="col-sm-10 ml-5">
                    <input
                      type="text"
                      class="form-control"
                      id="pwdD"
                      placeholder="Enter Description"
                      name="Description"
                      value={data.Description}
                      onChange={(e) => {
                        changeHandler(e);
                      }}
                    />
                  </div>
                </div>
                <br />
                <div class="form-group">
                  <label class="control-label col-sm-2 " for="pwd">
                    Image
                  </label>
                  <input
                    type="file"
                    id="pwd"
                    name="Photo"
                    onChange={(e) => {
                      setData({ ...data, Photo: e.target.files[0] });
                    }}
                  />
                </div>
              </form>
            </div>
            <div class="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="Active"
                  checked={data.Active == 1 ? true : false}
                  onChange={() => {
                    setData({ ...data, Active: !data.Active });
                  }}
                />{" "}
                Active
              </label>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  change.check ? submitForm() : editPost();

                  setChange({ ...change, check: true });
                }}
                data-dismiss="modal"
              >
                Submit
              </button>
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
