import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://www.google.com/search?sca_esv=1bed38c31bb49fbb&rlz=1C1VDKB_enIN1119IN1119&sxsrf=AHTn8zoKkg0psFo_laWx3jlqqa5dUf7shQ:1742935757594&q=about+section+images&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBpcx8kZB4NRoUjdgt8WwoMt2eLfGlVE3GaT9s2o0rEuu-Y1Mh87qtnewvg22WgWOcjFOidPNNWCo8wn28Ccj-7FD1WS4X8LcvpaCfmy_cccFsQEl44KkGSGauvxXOmi5n6EUCHCijo_ofyFbvazjPpO4ur6dCM8P46lkmTm214-LappqCw&sa=X&ved=2ahUKEwjancrVjaaMAxVlUWwGHfHBPCYQtKgLegQIEhAB&biw=1920&bih=911&dpr=1#vhid=_c_5TA-foHuqZM&vssid=mosaic"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
