import { services } from "../constants"

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
       {services.map((service) =>(
        <serviceCard key ={service.label}  
          {...service}
        />
       ))}
    </section>
  )
}

export default Services
