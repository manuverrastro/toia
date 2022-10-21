import { Loader, Placeholder } from 'rsuite';


const CustomLoader = () => {
  return (
    <div style={{height:'auto', position: 'relative' }}>
    <div className="row">
      <div className="col-md-4"><Placeholder.Graph active /></div>
      <div className="col-md-4"><Placeholder.Graph active /></div>
      <div className="col-md-4"><Placeholder.Graph active /></div>
      <div className="col-md-4 d-none d-sm-none d-md-block"><Placeholder.Graph active /></div>
      <div className="col-md-4 d-none d-sm-none d-md-block"><Placeholder.Graph active /></div>
      <div className="col-md-4 d-none d-sm-none d-md-block"><Placeholder.Graph active /></div>
      <div className="col-md-4 d-none d-sm-none d-md-block"><Placeholder.Graph active /></div>
      <div className="col-md-4 d-none d-sm-none d-md-block"><Placeholder.Graph active /></div>
      <div className="col-md-4 d-none d-sm-none d-md-block"><Placeholder.Graph active /></div>
    </div>
    <Loader center size="md" />
  </div>
  )
}

export default CustomLoader