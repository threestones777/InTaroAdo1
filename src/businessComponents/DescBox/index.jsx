/* eslint-disable react/prop-types */
export default function DescBox(props = {}) {
  const {
    className = '',
    title = '',
    desc = '',
    children = []
  } = props;

  return (
    <section className={`w-full py-135 desc-box ${children?.length > 0 ? 'pb-160' : ''} ${className}`}>
      <div className='mx-auto w-830'>
        <div className='wow animate__animated animate__jackInTheBox  title-50'>{title}</div>
        <div className='title-b-line mt-16'></div>
        <div className='wow animate__animated animate__slideInUp desc content-22 mt-31 text-center'>{desc}</div>
      </div>


      {children?.length > 0 && (
        <div
          className='mx-auto mt-120 flex flex-row gap-34 justify-center'
        >
          {
            children.map((item) => (
              <div key={item.title} className='w-340'>
                <div
                  className='img-wrap w-full h-220'
                >
                  <img src={item.img} className='w-full h-full object-cover' />
                </div>
                <div className='title-28 text-center mt-12'>{item.title}</div>
                <div className='desc content-18 mt-20 text-center'>{item.desc}</div>
              </div>
            ))
          }
        </div>
      )}
    </section>
  )
}