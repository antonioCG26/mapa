SELECT pixeles.id_pixel,pixeles.id_sala,no_sala.nombre,pixeles.color FROM pixeles inner join no_sala on pixeles.id_sala = no_sala.no_sala WHERE no_sala.no_sala=pixeles.id_sala

