/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { RecpieContext } from "../../context/RecpieContext";
import "./Recpie.css";
const Recpie = ({
	name,
	imageUrl,
	cookingTime,
	id,
	// ingredients,
	// instructions,
	// description,
	isSavedItem,
	isSaved,
}) => {
	const ctx = useContext(RecpieContext);
	return (
		<div className="recpie">
			<h2>{name}</h2>
			<div className="buttons-wrapper">
				{isSavedItem ? null : (
					<button
						onClick={async () => {
							// const newSavedRecpie = {
							// 	name,
							// 	imageUrl,
							// 	cookingTime,
							// 	id,
							// 	ingredients,
							// 	instructions,
							// 	description,
							// };
							// const findRecpie = ctx.savedRecpies.find(
							// 	(savedR) => savedR.id === id
							// );
							const findRecpie2 = ctx.recpies.find(
								(recpie) => recpie.id === id
							);

							if (findRecpie2) {
								findRecpie2.isSaved = !findRecpie2.isSaved;

								//console.log(newRecpies);
								const url = `https://dummy-2c596-default-rtdb.firebaseio.com/recpies/${id}.json`;
								await fetch(url, {
									method: "PATCH",
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify(findRecpie2),
								});
								if (findRecpie2.isSaved) {
									const newRecpies = [...ctx.recpies];
									ctx.setRecpies(newRecpies);
									await fetch(
										"https://dummy-2c596-default-rtdb.firebaseio.com/saved.json",
										{
											method: "POST",
											headers: { "Content-Type": "application/json" },
											body: JSON.stringify(findRecpie2),
										}
									);
								} else {
									const response = await fetch(
										"https://dummy-2c596-default-rtdb.firebaseio.com/saved.json"
									);
									const data = await response.json();
									const items = [];
									for (const key in data) {
										items.push({
											id: key,
											cookingTime: data[key].cookingTime,
											description: data[key].description,
											imageUrl: data[key].imageUrl,
											ingredients: data[key].ingredients,
											instructions: data[key].instructions,
											name: data[key].name,
											//isSaved: data[key].isSaved,
										});
									}

									//delete by name
									const exactItem = items.find((item) => item.name === name);
									const newRecpies = [...ctx.recpies];
									ctx.setRecpies(newRecpies);
									const url = `https://dummy-2c596-default-rtdb.firebaseio.com/saved/${exactItem.id}.json`;
									await fetch(url, {
										method: "DELETE",
									});
								}
							}
						}}
					>
						{isSaved ? "unSave" : "Save"}
					</button>
				)}

				<Link to={id}>view details</Link>
			</div>
			<img className="recpie-img" src={imageUrl} />
			<p>cookingTime: {cookingTime}min</p>
		</div>
	);
};

export default Recpie;
