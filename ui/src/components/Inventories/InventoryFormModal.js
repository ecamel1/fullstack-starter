import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import TextField from '../Form/TextField'
import { Field, Form, Formik } from 'formik'

import {  MenuItem, Checkbox } from '@material-ui/core'

class InventoryFormModal extends React.Component {
  render() {
    const {
      formName,
      isDialogOpen,
      handleDialog,
      handleInventory,
      title,
      initialValues,
      unitOfMeasurement,
      products
    } = this.props
	
	  
    const validate = values => {
       const errors = {}

       if(!values.name){
          errors.name = 'Name is required';
       } 
       if (!values.productType){
          errors.productType = 'Product Type is required';
       } 

       if(values.averagePrice < 0){
	  errors.averagePrice = 'Price must be greater than 0';
       } 

       if(values.amount < 0){
          errors.averagePrice = 'Amount must be greater than 0';
       }

       if (!values.unitOfMeasurement){
          errors.unitOfMeasurement = 'Measurement is required';
       }

       return errors;
    }                   
    

    return (
      <Dialog
        open={this.props.isDialogOpen}
        maxWidth='sm'
        fullWidth={true}
        onClose={() => { handleDialog(false) }}
      >
        <Formik
          initialValues={initialValues}
	  validate={validate}
          onSubmit={values => {
            validate(values)
	    handleInventory(values)
            handleDialog(true)
          }}>
          {helpers =>
            <Form
              noValidate
              autoComplete='off'
              id={formName}
            >
              <DialogTitle id='alert-dialog-title'>
                {`${title} Inventory`}
              </DialogTitle>
              <DialogContent>
                <Grid container>
                  {/* Name field */}
                  <Grid item xs={12} sm={12}>
                    <Field
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='name'
                      label='Name'
                      component={TextField}
                    />
                  </Grid>
                  {/* Product Type*/}
                  <Grid item xs={12} sm={12}>
                    <Field
		      select
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='Product Type'
                      label='productType'
                      component={TextField}
                    >
		    {products.map((products) => (
		      <MenuItem key={products.id} value={products.name}>
		        {products.name}
		      </MenuItem>
		    ))} 		    
		  </Field>
                  </Grid>
                  {/* Description */}
                  <Grid item xs={12} sm={12}>
                    <Field
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='description'
                      label='description'                    
                      component={TextField}
                    />
                  </Grid>
                  {/*Average Price*/}
                  <Grid item xs={12} sm={12}>
                    <Field
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='averagePrice'
                      label='averagePrice'
                      component={TextField}
                    />
                  </Grid>
                  {/*Amount*/}
                  <Grid item xs={12} sm={12}>
                    <Field
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='amount'
                      label='amount'
                      component={TextField}
                    />
                  </Grid>
                  {/*Units of Measurement*/}
                  <Grid item xs={12} sm={12}>
                    <Field
		      select
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='unitOfMeasurement'
                      label='Unit Of Measurement'
                      component={TextField}
                    >
		  { Object.keys(unitOfMeasurement).map(unit => 
			<MenuItem key={unit} value={unit}>
			    {unit}
                        </MenuItem>
                      )}
		     
		  </Field>
                  </Grid>
                  {/*Best Before Date*/}
                  <Grid item xs={12} sm={12}>
                    <Field
		      type="date"
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='bestBefore'
                      label='Best Before' 
                      component={TextField}
                    />
                  </Grid>
                  {/*Never Expires*/}
                  <Grid item xs={12} sm={12}>
                    <Field
		      type="checkbox"
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='expires'
                      label='expires'
                      component={Checkbox} 
                    /> Expires
		  </Grid>

                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => { handleDialog(false) }} color='secondary'>Cancel</Button>
                <Button
                  disableElevation
                  variant='contained'
                  type='submit'
                  form={formName}
                  color='secondary'
                  disabled={!helpers.dirty}>
                  Save
                </Button>
              </DialogActions>
            </Form>
          }
        </Formik>
      </Dialog>
    )
  }
}
    
export default InventoryFormModal
