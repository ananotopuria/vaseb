export default function Hero() {
  return (
     <section className="hero ">
        <div className="container p-relative">
           <div className="row">
              <img src="./images/log.svg" alt="" className="d-block p-absolute" />
              <div className="row center text-white">
                 <p className="sub-title">Inspired Living</p>
                 <h1>Collection</h1>
                 <p className="sub-title">
                    Transform your home with Vaseb's innovative design solutions.
                 </p>
              </div>
           </div>
           <div className="row buttons">
              <button className="button round bg-white">Explore Collection</button>
              <br />
              <button className="button round bg-transparent">Shop Now</button>
           </div>
        </div>
     </section>
  );
}
