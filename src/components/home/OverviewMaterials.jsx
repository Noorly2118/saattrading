import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { materialImages } from "../../assets/images";
import { sanityClient } from "../../utils/sanityClient";


// Sanity → React image fallback map
const imageFallback = {
  rebar: materialImages.rebar,
  nails: materialImages.nails,
  "black-wire": materialImages["black-wire"],
  staffa: materialImages.staffa,
};


const MaterialsOverview = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
  sanityClient
    .fetch(`
      *[_type == "material" && active == true] | order(name asc) {
        name,
        description,
        "slug": slug.current,
        "imageUrl": image.asset->url
      }
    `)
    .then(setMaterials)
    .catch(console.error);
}, []);


  return (
    <>
      <style>{`
        .materials-section { padding: 6rem 0; background: #f5f7f8; }
        .materials-header h2 { font-size: 2.4rem; font-weight: 800; color: #2b2b2b; }
        .materials-header h2 span { color: #004e5c; }
        .materials-header p { max-width: 620px; margin: 1rem auto 4rem; color: #6c757d; }
        .material-card { background: #fff; border-radius: 16px; overflow: hidden; height: 100%; box-shadow: 0 10px 30px rgba(0,0,0,.08); transition: .4s; }
        .material-card:hover { transform: translateY(-10px); box-shadow: 0 20px 45px rgba(0,0,0,.15); }
        .material-image { height: 200px; overflow: hidden; background: linear-gradient(135deg,#004e5c,#006d7a); border-bottom: 4px solid #004753; }
        .material-image img { width: 100%; height: 100%; object-fit: cover; transition: .4s; }
        .material-card:hover img { transform: scale(1.1); }
        .material-content { padding: 1.8rem; text-align: center; }
        .material-content h5 { font-size: 1.25rem; font-weight: 700; color: #004e5c; }
        .material-content p { font-size: .95rem; color: #6c757d; margin: .8rem 0 1.2rem; }
        .material-link { font-weight: 600; color: #ff8c00; text-decoration: none; }
      `}</style>

      <section className="materials-section">
        <div className="container">
          <div className="materials-header text-center">
            <h2>Our <span>Construction Materials</span></h2>
            <p>
              We supply high-quality construction materials trusted by contractors
              and developers.
            </p>
          </div>

          <div className="row g-4">
            {materials.map((item) => (
              <div className="col-lg-3 col-md-6" key={item.slug}>
                <div className="material-card">
                  <div className="material-image">
                    <img
                      src={
                        item.imageUrl ||
                        imageFallback[item.slug] ||
                        materialImages.rebar
                      }
                      alt={item.name}
                    />
                  </div>

                  <div className="material-content">
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                    <Link
                      to={`/materials/${item.slug}`}
                      className="material-link"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MaterialsOverview;
