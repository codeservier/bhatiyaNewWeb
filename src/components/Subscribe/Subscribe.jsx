import React, { useState } from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import InputField from "../InputField/InputField";
import emailjs from 'emailjs-com';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid.";
      isValid = false;
    }
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required.";
      isValid = false;
    }
    if (!formData.address) {
      tempErrors.address = "Address is required.";
      isValid = false;
    }
    if (!formData.city) {
      tempErrors.city = "City is required.";
      isValid = false;
    }
    if (!formData.message) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    emailjs
      .sendForm("service_0g97v9p", "template_kq774f9", e.target, "HK4mIkZI01IBPf94S")
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setErrors({});
          setFormData({ name: "", email: "", phone: "", address: "", city: "", message: "" }); // Clear form
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1
              id="contact"
              className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold"
            >
              Get Notified About New Products
            </h1>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <InputField
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
              </div>
              <div>
                <InputField
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
              </div>
              <div>
                <InputField
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
                {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <InputField
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
              />
              {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
            </div>
            <div>
              <InputField
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />
              {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg h-20 p-2 text-black"
                placeholder="Message"
              />
              {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-black rounded-lg h-12 hover:opacity-25 hover:text-white"
            >
              Submit
            </button>
            {status && <p className="mt-1 w-full text-red-600">{status}</p>}
          </div>
        </form>
      </div>
    </div>
  );  
};

export default Subscribe;
