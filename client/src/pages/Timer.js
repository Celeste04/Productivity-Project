export default function Timer () {
    return (
        <div className="bg-green h-screen w-screen">
          <h1 className="text-4xl font-bold text-center text-grey p-10">Pomodoro</h1>
          <h2 className="text-3xl font-bold text-grey ml-20 p-10">🌱 focus zone</h2>
          <div className="flex space-x-5 p-10">
            <div className="bg-light-pink rounded-xl w-1/2 p-5 border border-pink">
              <div className="w-full h-100 flex justify-center bg-pink rounded-xl">
                <div>
                    <div className="p-8"></div>
                    <div></div>
                </div>
              </div>
            </div>
            <div className="bg-light-pink rounded-xl w-1/2 p-5 border border-pink">
              <div className="w-full h-100 flex justify-center items-center bg-pink rounded-xl">
                <img className="rounded-xl w-5/6" src="/images/Lofi_Girl.jpeg"/>
              </div>
            </div>
          </div>
        </div>
      );
};
