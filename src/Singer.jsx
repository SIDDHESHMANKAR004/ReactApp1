// import "./App.css";
export default function Singer(props) {
  let { imageName } = props;
  console.log(imageName);

  return (
    <>
      <div className="text-center" >
        <img  className=" img-fluid  " src={`/images_singers/${imageName}.jpg`} alt="No Img...." />
      </div>
    </>
  );
}
