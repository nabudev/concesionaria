'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusIcon, Pencil, Trash2, Upload } from 'lucide-react'
import { useEffect } from 'react';
import { getAllVehicles, createVehicle, updateVehicle, deleteVehicle } from '@/api/api';

export function AdminVehiclePanel() {
  const [vehicles, setVehicles] = useState([])
  const [currentVehicle, setCurrentVehicle] = useState({ id: null, name: '', description: '', price: '', features: [], imageUrl: '' })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [newFeature, setNewFeature] = useState('')
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const [actionToConfirm, setActionToConfirm] = useState(null)

  useEffect(() => {
    // Obtener los vehículos cuando el componente se monta
    const fetchVehicles = async () => {
      const vehiclesData = await getAllVehicles();
      setVehicles(vehiclesData);
    };
    fetchVehicles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCurrentVehicle({ ...currentVehicle, [name]: value })
  }

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setCurrentVehicle({
        ...currentVehicle,
        features: [...currentVehicle.features, newFeature.trim()]
      })
      setNewFeature('')
    }
  }

  const handleRemoveFeature = (index) => {
    setCurrentVehicle({
      ...currentVehicle,
      features: currentVehicle.features.filter((_, i) => i !== index)
    })
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCurrentVehicle({ ...currentVehicle, image: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      // Actualizar vehículo existente
      await updateVehicle(currentVehicle._id, currentVehicle);
      setVehicles(vehicles.map(vehicle => vehicle._id === currentVehicle._id ? currentVehicle : vehicle));
    } else {
      // Agregar nuevo vehículo
      const newVehicle = await createVehicle(currentVehicle);
      setVehicles([...vehicles, newVehicle]);
    }
    setIsDialogOpen(false);
    setCurrentVehicle({ id: null, name: '', description: '', price: '', features: [], imageUrl: '' });
    setIsEditing(false);
  };

  const handleEdit = (vehicle) => {
    setCurrentVehicle(vehicle);
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleDelete = (vehicleId) => {
    setActionToConfirm(() => async () => {
      await deleteVehicle(vehicleId);
      setVehicles(vehicles.filter(vehicle => vehicle._id !== vehicleId));
    });
    setIsConfirmDialogOpen(true);
  };

  const confirmAction = () => {
    actionToConfirm();
    setIsConfirmDialogOpen(false);
    setActionToConfirm(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración de Vehículos</h1>
      
      <Dialog open={isDialogOpen} onOpenChange={(open) => {
        setIsDialogOpen(open)
        if (!open) {
          setCurrentVehicle({ id: null, name: '', description: '', price: '', features: [], image: '' })
          setIsEditing(false)
        }
      }}>
        <DialogTrigger asChild>
          <Button className="mb-4">
            <PlusIcon className="mr-2 h-4 w-4" /> Añadir Vehículo
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>{isEditing ? 'Editar Vehículo' : 'Añadir Nuevo Vehículo'}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(90vh-120px)] overflow-y-auto pr-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  value={currentVehicle.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={currentVehicle.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="price">Precio</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={currentVehicle.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="features">Características</Label>
                <div className="flex space-x-2 mb-2">
                  <Input
                    id="features"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="Nueva característica"
                  />
                  <Button type="button" onClick={handleAddFeature}>Añadir</Button>
                </div>
                <ul className="list-disc list-inside">
                  {currentVehicle.features.map((feature, index) => (
                    <li key={index} className="flex justify-between items-center mb-1">
                      {feature}
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleRemoveFeature(index)}
                      >
                        Eliminar
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Label htmlFor="image">Imagen del Vehículo</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Label htmlFor="image" className="cursor-pointer flex items-center justify-center w-full h-32 border-2 border-dashed rounded-md hover:border-primary">
                    {currentVehicle.imageUrl ? (
                      <Image
                        src={currentVehicle.imageUrl}
                        alt="Vista previa del vehículo"
                        width={200}
                        height={100}
                        className="object-cover rounded-md"
                      />
                    ) : (
                      <div className="text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <span className="mt-2 block text-sm font-medium text-gray-900">
                          Subir imagen
                        </span>
                      </div>
                    )}
                  </Label>
                </div>
              </div>
            </form>
          </ScrollArea>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmit}>{isEditing ? 'Actualizar' : 'Añadir'}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Características</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle._id}>
              <TableCell>
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={100}
                  height={75}
                  className="object-cover rounded-md"
                />
              </TableCell>
              <TableCell>{vehicle.name}</TableCell>
              <TableCell>{vehicle.description}</TableCell>
              <TableCell>${vehicle.price.toLocaleString()}</TableCell>
              <TableCell>
                <ul className="list-disc list-inside">
                  {vehicle.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="icon" className="mr-2" onClick={() => handleEdit(vehicle)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleDelete(vehicle._id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AlertDialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. ¿Estás seguro de que quieres continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmAction}>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}