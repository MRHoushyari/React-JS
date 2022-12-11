import Skeleton from "react-loading-skeleton";

const LoadingUser = () => {
  return (
    <>
      {Array(6)
        .fill({})
        .map(() => {
          return (
            <div className="col-4 text-center p-5">
              <Skeleton
                className="mb-4"
                circle={true}
                height={100}
                width={100}
                animation="wave"
              />
              <Skeleton
                className="mb-4"
                height={30}
                count={2}
                variant="rectangular"
              />
            </div>
          );
        })}
    </>
  );
};
export { LoadingUser };
