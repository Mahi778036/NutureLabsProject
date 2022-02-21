import "./Table.css";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const Table = ({data}) => {
    return <div className="table">
        <div className="table_img">
            <img className="bitcoin" src={data.img} alt="table--img" />
            <div className="table_text_section">
                <h4>{data.asset}</h4>
                <div className="text_description">
                    <p>{data.put}</p>
                    <div className="table_button">
                        <img className="avax" src="https://raw.githubusercontent.com/akshita151199/APIs/main/avax.png" alt="logo" />
                        <p>AVAX</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="table_amount">
            <h3>{data.amount + " "}BNB</h3>
            <p>Expired</p>
        </div>
        <div className="table_username">
        {data.user}
        </div>
        <div className="table_amount">
            <h3>{data.amount + " "}BNB</h3>
            <div className="table_amount_icon">
                <p>View on BSC Scan</p>
                 <KeyboardBackspaceIcon style={{
                     color:"#808191"
                 }}/>
            </div>
        </div>
    </div>
}
export default Table;