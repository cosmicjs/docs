
# Metafields

Metafields are powerful components that can be added to Objects and Object Types. Metafields added to Object Types will be default for all new Objects in the type.

### Model

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|type|	required|	Enum|	text, textarea, html-textarea, select-dropdown, object, objects, file, date, radio-buttons, check-boxes, repeater, parent, markdown, json|
|title|	required|	String|	Your Metafield title|
|key|	required|	String|	Unique identifier for your Metafield|
|value|	|	String|	Metafield value|
|required|	|	Bool|	A value is required|
|regex|	|	String|	Restrict the value to match a regular expresssion|
|regex_message|	|	Array|	The message displayed when the value fails the regex|
|minlength|	|	Number|	Add minlength to text or textarea Metafields|
|maxlength|		|Number|	Add maxlength to text or textarea Metafields|
|children|	|	Array|	Add nested Metafields|

### Validation

You can use optional validation parameters to make sure editors using the Web Dashboard enter the correct values.

Reference the [Metafield model](https://cosmicjs.github.io/rest-api-docs/?javascript#model) to learn more.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|required	|	|Bool|	A value is required|
|regex|		|String|	Restrict the value to match a regular expresssion|
|regex_message|		|Array|	The message displayed when the value fails the regex|
|minlength|		|Number|	Add minlength to text or textarea Metafields|
|maxlength|		|Number|	Add maxlength to text or textarea Metafields|

### Connect Objects

You can connect Objects to create "one to many" and "many to many" relationships between Objects using Single and Multiple Object Metafields.

#### Single Objects

For a Single Object Metafield, add the Object ID (`_id`) to the value to connect the Object. The full Object will be returned on the Metadata response in the `object` property.

#### Multiple Objects

For Multiple Object type Metafields, you can add the Object IDs as comma-separated values. The full Objects will be returned on the Metadata response in the `objects` property.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|type|	required|	Enum|	object, objects|
|title|	required|	String|	Your Metafield title|
|key	|required|	String|	Unique identifier for your Metafield|
|object_type	|required|	String|	Object Type slug|
|value	|	|String|	For single Object this is the _id property. For multiple Objects it is comma-separated _ids.|
