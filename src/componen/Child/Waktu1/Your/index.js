import React from 'react'
class Index extends React.Component{
    render(){
        console.log(this.props.waktu)
        if(this.props.waktu.tahun === new Date().getFullYear()){
            if(this.props.waktu.bulan === new Date().getMonth()){
                if(this.props.waktu.tanggal === new Date().getDate() ){
                    if(this.props.waktu.jam === new Date().getHours() ){
                        if(this.props.waktu.menit === new Date().getMinutes()){
                            return(
                                <div className="date12" > baru saja </div>
                            )
                        }else{
                            let waktu = new Date().getMinutes() - this.props.waktu.menit
                            return(
                                <div className="date12" > {waktu} Menit yang lalu </div>
                            )
                        }
                    }else{
                        let waktu = new Date().getHours() - this.props.waktu.jam
                        return(
                            <div className="date12" > {waktu} Jam yang lalu </div>
                        )
                    }
                }else{
                    let waktu = new Date().getDate() - this.props.waktu.tanggal
                    return(
                        <div className="date12" > {waktu} hari lalu </div>
                    )
                }

            }else{
                let waktu = new Date().getMonth() - this.props.waktu.bulan
                return(
                    <div className="date12" > {waktu} bulan yang lalu </div>
                )
            }
        }else{
            let waktu = new Date().getFullYear() - this.props.waktu.tahun
            return(
                <div className="date12" > {waktu} tahun yang lalu </div>
            )
        }



        
    }
}
export default Index