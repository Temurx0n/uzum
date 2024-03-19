import './Kirish.css'

const Kirish = () => {

  return (
    <div className="container">
      <form className='kir'><br /><br /><br /><br /><br /><br />
        <div className="h1">Telefon nomerini kiriting</div><br /><br /><br /><br />
        <div className="inputs">+998
          <input type="text" className="kirish_input" placeholder='000-00-00' required />
          <button className="btn">kodni olish</button><br /><br /><br /><br />
          <p>  Avtotizatsiyadan o'tish orqali siz <a href="/" className='shax'>shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz</a> </p></div>
      </form>
    </div>
  )
}

export default Kirish