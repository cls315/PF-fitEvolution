


const filterByFocus= async(req,res) =>{
    const { focus } = req.query;


    try {
        const api = await axios.get("http://localhost:5000/entrenadores")
        const filterTrainers= api.data.filter((trainer)=> trainer.focusTr === focus)


        res.json(filterTrainers)
    
    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
 
}


module.exports= filterByFocus;