import './Home.css'

export default function Home() {
  return (
    <div className="container">
      <div className="whoWeAre">360 Degrees of Ease
      <p>seitan heirloom post-ironic pop-up iPhone mlkshk hella selfies fashion axe occupy readymade put a bird on it messenger bag Wes Anderson Schlitz 
        plaid Bushwick church-key lo-fi skateboard slow-carb hashtag trust fund Williamsburg biodiesel fixie farm-to-table 8-bit banjo XOXO Banksy chillwave
        bicycle rights retro cliche tattooed bespoke irony mumblecore Shoreditch deep v polaroid McSweeney's bitters cray gentrify tofu Marfa you probably haven't 
        heard of them yr banh mi asymmetrical art party selvage letterpress High Life.</p>
      </div>
      <div className="cta">
        <h2>Click here for a quote today!</h2>

        <div class="hero-form">
             <h3>Get Started Today</h3>
             <p>Fill out this form and one of our trainers will schedule a consult</p>
             <form>
                <label for="name">Your Name:</label>
                <input type="text" placeholder="Your Name" name="name" id="name" class="form-input" />
                <label for="email">Your Email:</label>
                <input type="text" placeholder="Email Address" name="email" id="email" class="form-input" />
                <label for="phone">Phone Number:</label>
                <input type="text" placeholder="Phone Number" name="phone" id="phone" class="form-input" />
                
                <button type ="submit">
                    Get Building!
                </button>
            </form>
          </div>
      

      </div>
    </div>
  );
}
