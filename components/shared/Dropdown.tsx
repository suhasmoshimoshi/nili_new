import React, { startTransition, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { ICategory } from '@/lib/database/models/category.model';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Textarea } from "@/components/ui/textarea"


import { Input } from "@/components/ui/input"

  
  

type Dropdownprops = {
    value? : string;
    onChangeHandler? : () => void;
}
const Dropdown = ({value , onChangeHandler} : Dropdownprops) => {
    const [newCategory , setNewCategory] = useState<string>('')

    const [categories , setCategories] = useState<ICategory[]>([
   
    ])


    const handleAddCategory =()=>{

    }
  return (
    <div>
   <Select onValueChange={onChangeHandler} defaultValue={value}>
  <SelectTrigger className="select-feild">
    <SelectValue placeholder="Category" />
  </SelectTrigger>
  <SelectContent>
   {
    categories.length > 0 && categories.map((category , index) => (
        <SelectItem key={category._id} value={category._id}>{category.name}</SelectItem>
    ))
   }
   <AlertDialog>
  <AlertDialogTrigger className='p-md-14 flex w-full rounded-sm py-3 pl-8 text-green-500 hover:bg-primary-50 focus:text-green-500'>Open</AlertDialogTrigger>
  <AlertDialogContent className='bg-white'>
    <AlertDialogHeader>
      <AlertDialogTitle>New Category</AlertDialogTitle>
      <AlertDialogDescription>
       <Input type='text' placeholder=' category name' className='w-full' 
       onChange={(e) => setNewCategory(e.target.value)}
     
       />
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=>{
        startTransition(handleAddCategory)
      }}>Add</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  </SelectContent>
</Select>

    </div>
  )
}

export default Dropdown
