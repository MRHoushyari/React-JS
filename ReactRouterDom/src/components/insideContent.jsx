import { useParams } from "react-router-dom";

const InsideContent = () => {
  const params = useParams();
  return (
    <>
      <h1>InsideContent is : {params.id}</h1>
    </>
  );
};

export default InsideContent;
