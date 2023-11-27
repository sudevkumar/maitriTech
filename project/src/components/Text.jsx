import React from "react";
import Button from "./Button";

const Text = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] lg:w-[70%] m-auto mt-6  lg:mt-16 flex flex-col items-center">
        <h1 className="text-center text-xl font-bold">
          Welcome To National Institute of Fine Arts
        </h1>
        <p className="text-center  mt-3 lg:mt-7 font-extralight text-sm tracking-widest leading-6">
          National Institute of Fine Arts (NIFA) is a national center for
          education in arts, fostering the excellence of emerging and
          established artists and advancing art to create a more human world.
          National Institute of Fine Arts (NIFA) was established by MRS RENU
          KHERA in Delhi and NCR of Delhi on July 2005. Institute established
          another unit in Panna (M.P) which is affiliated to Raja Mansingh Music
          and Arts University (Gwalior). Its aim is to provide education and
          training to students on a wide spectrum of Fine Arts.
        </p>

        <p className="text-center mt-3 lg:mt-7 font-extralight text-sm tracking-widest leading-6">
          National Institute of Fine Arts is a place where the creative
          expression of individuals is nurtured and a sense of community
          flourishes. We seek to shape the global future of arts with an
          emphasis on excellence that allows its members to reach for the
          highest artistic standards as individuals while recognizing that the
          Art is one of the foundations of a healthy and creative society. This
          is a place where national and international leaders in the arts
          gather, teach, show and perform their work. The institute prides
          itself on its openness and on creating an environment that is safe,
          welcoming, and built on mutual respect.
        </p>

        <p className="text-center mt-7 font-semibold text-sm">
          National Institute of Fine Arts is a place where the creative
          expression of individuals is nurtured and a sense of community
          flourishes.
        </p>

        <Button text={"Read More"} />
      </div>
    </div>
  );
};

export default Text;
