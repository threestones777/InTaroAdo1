import './index.css';

export default function GraphicDescriptionBox(props = {}) {
  const {
    className = '',
    smallTitle = '',
    title = '',
    desc = '',
    img = '',
    align = 'left'
  } = props;

  let descAlign = 'text-right';
  let descBoxOrder = '';
  let descBoxPadding = 'pr-40';
  if (align === 'right') {
    descAlign = 'text-left';
    descBoxOrder = 'order-2';
    descBoxPadding = 'pl-40';
  }

  return (
    <section className={`graphic-desc-box mb-160 ${className}`}>
      <div className='box-1180  flex flex-row justify-center items-center relative'>
        <div
          className={`desc-wrap pl-40 ${descBoxOrder} ${descAlign} ${descBoxPadding} flex-1 z-10`}
        >
          <div
            className={` animate__animated animate__jackInTheBox wow w-580 desc-box ${align}`}
          >
            <div className='title-14 text-primary '>{smallTitle}</div>
            <div className='title-36'>{title}</div>
            <div className='content-18 mt-13'>{desc}</div>
          </div>
        </div>

        <div className='img-wrap w-878 h532 z-0'>
          <img src={img} alt={title} className='w-full h-full' />
        </div>
      </div>
    </section>
  )
}