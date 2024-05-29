import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-black/80 w-full text-white h-[15rem] flex flex-col items-center py-2 justify-center">
      {/* content */}
      <div className=" flex w-full h-full justify-around items-center">
        {/* 1st one  */}
        <section className=" max-w-[15rem] h-full flex flex-col justify-center items-start">
          <h1>Support</h1>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>singhdivyam772@gmail.com</p>
          <p>9711836253</p>
        </section>

        {/* 1st one  */}
        <section className=" max-w-[15rem] h-full flex flex-col justify-center items-start">
          <h1>Account</h1>
          <p>My Account</p>
          <p>Login/Register</p>
          <p>Cart</p>
        </section>

        {/* 3st one  */}
        <section className=" max-w-[15rem] h-full flex flex-col justify-center items-start">
          <h1>Quick Line</h1>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p>FAQ</p>
          <p>Content</p>
        </section>
      </div>

      {/* copyright */}
      <p>Copyright Rimel 2022. All right reserved</p>
    </footer>
  );
};

export default Footer;
