const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-6xl text-center mt-20 text-gray-400">Whoops!</h1>
      <img src="/public/404.jpg" className="w-2/5 rounded-xl" alt="" />
    </div>
  );
};

export default ErrorPage;
