import React, { useRef, useState } from "react";

const Counsel = () => {
  const formRef = useRef(null);
  const [message, setMessage] = useState(""); // Message uchun state

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyBGpwWJaSqBdsPhtbte4Uo9XU0sG5O9SvY9NnORDZfs6BKNC5jznqUTPFgd93BzmeX/exec";

    fetch(scriptURL, { method: "POST", body: new FormData(formRef.current) })
      .then((response) => {
        console.log("Success!", response);
        setMessage("✅ Your request was successfully submitted!");
        formRef.current.reset(); // Formani tozalash
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setMessage("❌ Something went wrong, try again!");
      });
  };

  return (
    <section className="counsel">
      <div className="container">
        <div className="counsel-wrapper">
          <div className="counsel-wrap1">
            <h2>Workshops and Spiritual Development</h2>
            <p>
              Participate in our weekly workshops focused on Islamic studies and
              spiritual growth. These sessions are designed to help you
              strengthen your connection with faith and acquire essential skills
              for daily life.
            </p>
          </div>

          <div className="counsel-wrap2">
            <h2>Free consultation</h2>
            <p>
              Leave your phone number, and we will reach out to provide you with
              complete information about our courses.
            </p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                className="counsel-text"
                name="Name"
                required
                placeholder="Name"
                type="text"
              />
              <input
                className="counsel-num"
                name="Phone"
                placeholder="+44"
                required
                type="tel"
              />

              <div className="form-check" style={{ margin: "10px 0" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agreeTerms"
                  required
                />
                <label className="form-check-label" htmlFor="agreeTerms">
                  I agree to the use of my personal information for consultation
                  purposes.
                </label>
              </div>

              <button type="submit">Submit</button>
            </form>

            {/* Message chiqarish */}
            {message && (
              <p
                style={{
                  marginTop: "10px",
                  color: message.startsWith("✅") ? "green" : "red",
                }}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counsel;
