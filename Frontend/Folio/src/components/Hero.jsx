import { PrimaryButton } from "./PrimaryButton";

export const Hero = () => {
  return (
    <>
      <div className=" text-white">
        <div className=" container">
          <div className=" grid grid-cols-3 pb-12 pt-4">
            <div className=" col-span-2 py-16 mx-16 font-semibold">
              <div className=" text-5xl font-Poppins ">
                This Is Dummy Text Lorem Ipsum Insta{" "}
              </div>
            </div>
            <div className=" col-span-2 mx-16  font-light">
              this is another Dummy text From the UI Designer
              <br />
              for Beautiful design
            </div>
            <div className=" col-span-2 mx-16 py-5">
              <PrimaryButton props={{ text: "Sign up" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
