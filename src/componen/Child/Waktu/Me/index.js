import React from 'react'
class Index extends React.Component{
    render(){
        if(this.props.waktu.tahun === new Date().getFullYear()){
            if(this.props.waktu.bulan === new Date().getMonth()){
                if(this.props.waktu.tanggal === new Date().getDate() ){
                    if(this.props.waktu.jam === new Date().getHours() ){
                        if(this.props.waktu.menit === new Date().getMinutes()){
                            return(
                                <div className="yourdate" > baru saja </div>
                            )
                        }else{
                            let waktu = new Date().getMinutes() - this.props.waktu.menit
                            return(
                                <div className="yourdate" > {waktu} Menit yang lalu </div>
                            )
                        }
                    }else{
                        let waktu = new Date().getHours() - this.props.waktu.jam
                        return(
                            <div className="yourdate" > {waktu} Jam yang lalu </div>
                        )
                    }
                }else{
                    let waktu = new Date().getDate() - this.props.waktu.tanggal
                    return(
                        <div className="yourdate" > {waktu} hari lalu </div>
                    )
                }

            }else{
                let waktu = new Date().getMonth() - this.props.waktu.bulan
                return(
                    <div className="yourdate" > {waktu} bulan yang lalu </div>
                )
            }
        }else{
            let waktu = new Date().getFullYear() - this.props.waktu.tahun
            return(
                <div className="yourdate" > {waktu} tahun yang lalu </div>
            )
        }



        
    }
}
export default Index