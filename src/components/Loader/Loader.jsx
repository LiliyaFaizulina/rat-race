import { Rings } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="modal-background is-flex is-justify-content-center is-align-items-center">
      <Rings
        height="80"
        width="80"
        color="#f99e2f"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
};

export default Loader;
