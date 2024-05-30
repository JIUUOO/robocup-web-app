import { Col } from "react-bootstrap";

export default function CardLg({ col = 5, title, description }) {
  const descriptions = description.map((el) => {
    return <span className="d-block py-1">&nbsp;{el}</span>;
  });

  const decorateTitle = (title) => {
    const league = "RoboCup ";
    const sector = "Junior ";
    return (
      <span>
        <span className="text-black fw-bold">
          {title.includes(league) ? league : ""}
        </span>
        <span className="text-black fw-bold">
          {title.includes(sector) ? sector : ""}
        </span>
        {title.replace(league, "").replace(sector, "")}
      </span>
    );
  };
  return (
    <Col
      lg={col}
      className="shadow border p-0 bg-primary bg-gradient mt-0 my-lg-2 mb-lg-5 rounded overflow-hidden"
    >
      <div className="p-3 py-2">
        <h1 className="fw-semibold fs-1 text-white">{decorateTitle(title)}</h1>
      </div>
      <div className="rounded p-3 pt-2 bg-light h-100">
        <p className="fs-5">{descriptions}</p>
      </div>
    </Col>
    //     <Col
    //     lg={col}
    //     className="shadow-sm border p-0 cardsm-bg my-2 mb-lg-5 rounded"
    //   >
    //     <div className="p-3 py-2">
    //       <h2 className="fw-semibold">{title}</h2>
    //     </div>
    //     <div className="rounded border-top p-3 pt-2 bg-white">
    //       <p className="fs-5">{descriptions}</p>
    //       <Image className="leaguesImage rounded" src={image} fluid />
    //       <div className="d-flex justify-content-center">
    //         <Button variant="white" className="border my-3">
    //           <NavLink
    //             to={"https://jiuuoo.github.io" + ruleSrc}
    //             target="_blank"
    //             className="text-decoration-none text-black fs-6"
    //           >
    //             규정 살펴보기
    //           </NavLink>
    //         </Button>
    //       </div>
    //     </div>
    //   </Col>
  );
}
