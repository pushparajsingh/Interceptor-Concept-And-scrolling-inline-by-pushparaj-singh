import React, { useEffect } from "react";
import { instance } from "../../Service/Config";
import { useState } from "react";
import Slider from "react-slick";
import {
  getTestimonialList,
  deletePost,
  editData,
  editPost,
  submitForm,
} from "../../redux/CounterSlice";
import { useDispatch, useSelector } from "react-redux";

const TestimonialCard = () => {
  const { dataTestimonial, del, singleData, updateData, createPost } =
    useSelector((state) => state);
  const [change, setChange] = useState({ check: true, id: "" });
  const Dispatch = useDispatch();
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
    slidesToScroll: 3,
  };

  useEffect(() => {
    Dispatch(getTestimonialList());
  }, [del, updateData, createPost]);

  useEffect(() => {
    setData(singleData);
  }, [singleData]);

  function changeHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
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
            onClick={() =>
              setData({
                Photo: "",
                Name: "",
                Post: "",
                Description: "",
                Active: 0,
              })
            }
          >
            Create Post
          </button>
          <div>
            <Slider {...settings}>
              {dataTestimonial?.map((item) => {
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
                          onClick={() => Dispatch(deletePost(item._id))}
                        >
                          Delete
                        </button>{" "}
                        &nbsp;
                        <button
                          className="btn btn-success"
                          onClick={() => {
                            Dispatch(editData(item._id));
                            setChange({ check: false, id: item });
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
                  change.check
                    ? Dispatch(submitForm(data))
                    : Dispatch(editPost({ change, data }));

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
