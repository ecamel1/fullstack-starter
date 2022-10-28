import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import TextField from '../Form/TextField'
import { Field, Form, Formik } from 'formik'

import { Menu, MenuItem, Checkbox } from '@material-ui/core'

class InventoryFormModal extends React.Component {
render() {
    const {
      formName,
      isDialogOpen,
      handleDialog,
      handleInventory,
      title,
      initialValues,
      bestBeforeDate,
      unitOfMeasurement
    } = this.props

	
    const errors = {}
    const fields = [
      'name',
      'productType',
      'unitOfMeasurement'
    ]

                                  
    const validate = (fields) => {
       const errors = {}

       if(!fields.name){
          errors.name = 'Name is required';
       } else if (!fields.productType){
          errors.name = 'Product Type is required';
       } else if (!fields.unitOfMeasurement){
          errors.name = 'Measurement is required';
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
          onSubmit={values => {
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
		      required
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='name'
                      label='Name'
                      component={TextField}
                    />
                  </Grid>
                  {/* Product Type CHANGE TO DROPDOWN*/}
                  <Grid item xs={12} sm={12}>
                    <Field
		      required
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='productType'
                      label='productType'
                      component={TextField}
                    />
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
		      type='number'
                      component={TextField}
                    />
                  </Grid>
                  {/*Amount*/}
                  <Grid item xs={12} sm={12}>
                    <Field
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='amount'
                      label='amount'
		      type='number'
                      component={TextField}
                    />
                  </Grid>
                  {/*Units of Measurement CHANGE TO DROPDOWNS*/}
                  <Grid item xs={12} sm={12}>
                    <Field
		      required
		      select
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='unitOfMeasurement'
                      label='unitOfMeasurement'
                      component={TextField}
                    >
		    {unitOfMeasurement.map((option) => (  
		      <MenuItem key={option.value} value={option.value}>
			{option}
		      </MenuItem>
		    ))}
		  </Field>
                  </Grid>
                  {/*Best Before Date*/}
                  <Grid item xs={12} sm={12}>
                    <Field
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='bestBefore'
                      label='bestBefore'
                      component={TextField}
                    />
                  </Grid>
                  {/*Never Expires CHECKBOX*/}
                  <Grid item xs={12} sm={12}>
                    <Field
                      custom={{ variant: 'outlined', fullWidth: true, }}
                      name='expires'
                      label='expires'
                      component={TextField}
                    />
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
