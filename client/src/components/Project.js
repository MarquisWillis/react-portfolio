import React from 'react';


export default function Project(props) {
    return (
        <div className="card col-3 space-around m-4">
            <div className="bg-image hover-overlay ripple rounded" data-mdb-ripple-color="light">
                <img src={props.image} className="img-fluid rounded-top" alt={props.description} name={props.id} />
                <a href="#!">
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                </a>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p>{props.description}</p>
                <p>{props.tech}</p>


                <div className='d-flex justify-content-between align-items-end'>
                    <div >
                    <a href={props.site} target="_blank" className="btn btn-primary">Deployed Application</a>
                    </div>
                    <div >
                    <a href={props.repo} target="_blank" className="btn btn-primary">Repository</a>
                    </div>
                    
                </div>




            </div>
        </div>
    )
}