import React from "react";
import "./style.css"
class Index extends React.Component{
 
render(){
	return (
		<div className="Kotak">
			<div className="satu">
				<center> {this.props.judul} </center>
			</div>
			<div className="dua">
				<div className="duasatu">
					<div className="anakjudul">
						{this.props.bagian1}
					</div>
					<div className="duasatudua">
						<div className="Harga">
							<table>
								<tbody>
									<tr>
										<td> {this.props.item1} </td>
									</tr>
									<tr className="Merah">
										<td> {this.props.harga1} </td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="Harga beda">
							<table>
								<tbody>
									<tr>
										<td> {this.props.item2} </td>
									</tr>
									<tr className="Merah">
										<td> {this.props.harga2} </td>
									</tr>
								</tbody>
							</table>
						</div>	
					</div>
				</div>
				<div className="duasatu">
					<div className="anakjudul">
						{this.props.bagian2}
					</div>
					<div className="duasatudua">
						<div className="Harga">
							<table>
								<tbody>
									<tr>
										<td> {this.props.item1} </td>
									</tr>
									<tr className="Merah">
										<td> {this.props.harga3} </td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="Harga">
							<table>
								<tbody>
									<tr>
										<td> {this.props.item2} </td>
									</tr>
									<tr className="Merah">
										<td> {this.props.harga4} </td>
									</tr>
								</tbody>
							</table>
						</div>	
					</div>
				</div>
			</div>
		</div>
    )
    
}
}
export default Index;
