import prismaClient from "../../../prisma"

interface CategoryResponse {
    id: string
    name: string
}

class ListCategoryService {
    async execute(){

        const category = await prismaClient.category.findMany({
            select:{
                id: true,
                name: true,
            }
        })
        return category;
    }
}

export { ListCategoryService }