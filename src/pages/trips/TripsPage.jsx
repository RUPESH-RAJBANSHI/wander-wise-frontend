import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MoreVertical, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TripsPage = () => {
  return (
    <section className='py-6 px-20'>
        <div className='flex item-center justify-between'>
            <h1 className='text-3xl font-bold'>Your Trips</h1>

            <a href="/trip/add"></a>
            <Button>
                <Plus />
                Add Trips
            </Button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
          
          <Card>
            <CardHeader>
              <CardTitle>Trip to france</CardTitle>

            <CardDescription>Feb 12 2026</CardDescription>
            <CardAction>
              <Button variant='outline size=10'>
                <MoreVertical />
              </Button>
            </CardAction>
            </CardHeader>

            <CardContent>
              <div className='flex item-center justify-between'>
                <span>
                  Budget
                </span>
                <span className=''>
                  $200
                </span>
              </div>

              <div>
                <span>Destinations</span>
                paris, lyaon, merseille
              </div>

            </CardContent>

            <CardFooter>
              <Button>
                
              </Button>
            </CardFooter>
          
          </Card>
        </div>
    </section>
  )
}

export default TripsPage