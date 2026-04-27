'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog'
import { XIcon } from 'lucide-react'

interface DetailItem {
  textEn: string
}

interface ServiceDetail {
  titleEn: string
  descriptionEn: string
  detailsEn: DetailItem[]
}

interface ServiceCard extends ServiceDetail {
  image?: string
}

interface FireRescueDetailModalProps {
  isOpen: boolean
  onClose: () => void
  service: ServiceCard | ServiceDetail | null
}

export const serviceDetails: { [key: number]: ServiceDetail } = {
  0: {
    titleEn: 'Workforce & Human Resources',
    descriptionEn: 'Providing trained personnel in fire fighting and rescue operations with the highest standards of safety and professional efficiency',
    detailsEn: [
      { textEn: 'Qualification and training of specialized fire fighting and rescue team' },
      { textEn: 'Commitment to the highest standards of safety and professional efficiency' },
      { textEn: 'Providing continuous training programs to develop team skills' },
      { textEn: 'Ensuring team readiness for rapid emergency response' },
      { textEn: 'Providing high health and safety standards for all personnel' }
    ]
  },
  1: {
    titleEn: 'Advanced Equipment & Tools',
    descriptionEn: 'Providing essential equipment including Personal Protective Equipment and advanced tools',
    detailsEn: [
      { textEn: 'Personal Protective Equipment (PPE) to protect personnel from injury risks' },
      { textEn: 'Self-Contained Breathing Apparatus (SCBA) for safe operations in hazardous environments' },
      { textEn: 'Advanced safety tools for effective rescue and fire containment' },
      { textEn: 'Modern detection and analysis equipment' },
      { textEn: 'Advanced wireless communication systems' }
    ]
  },
  2: {
    titleEn: 'Specialized Rescue & Response Teams',
    descriptionEn: 'Deploying and operating trained and specialized fire fighting and rescue teams',
    detailsEn: [
      { textEn: 'Deployment of specially trained fire fighting and rescue teams' },
      { textEn: '24/7 availability for emergency response' },
      { textEn: 'Rapid and effective response to all emergency situations' },
      { textEn: 'Specialized teams for complex and dangerous operations' },
      { textEn: 'Effective coordination with other emergency services' }
    ]
  },
  3: {
    titleEn: 'Station Development & Vehicle Maintenance',
    descriptionEn: 'Building rescue and fire stations and providing fire fighting vehicles',
    detailsEn: [
      { textEn: 'Building rescue and fire stations designed according to operational needs' },
      { textEn: 'Managing fire stations including staff training and equipment maintenance' },
      { textEn: 'Ensuring complete operational readiness for emergency response' },
      { textEn: 'Providing advanced fire trucks meeting international safety standards' },
      { textEn: 'Regular inspections and maintenance to ensure reliability and effectiveness' }
    ]
  }
}

export function FireRescueDetailModal({ isOpen, onClose, service }: FireRescueDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-white">
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl md:text-4xl font-bold text-primary mb-4 text-left">
            {service ? service.titleEn : ''}
          </DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <XIcon className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>

        {service && (
          <div className="space-y-8">
            {/* Main Description */}
            <div className="p-6 bg-slate-50 rounded-lg border-l-4 border-accent text-left">
              <p className="text-lg text-gray-800 leading-relaxed">
                {service.descriptionEn}
              </p>
            </div>

            {/* Details List */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 text-left">
                Details
              </h3>
              <ul className="space-y-4 text-left">
                {service.detailsEn.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-secondary text-white text-sm font-bold">
                        ✓
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {detail.textEn}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
