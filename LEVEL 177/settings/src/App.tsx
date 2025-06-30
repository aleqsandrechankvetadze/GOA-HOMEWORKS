import { Switch } from '@radix-ui/react-switch'
import { Label } from '@radix-ui/react-label'
import { Card } from './components/ui/card'
import React from 'react'

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-md p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-6">Platform Settings</h2>

        <div className="space-y-6">
          {/* Account Section */}
          <div>
            <h3 className="text-xs font-medium text-gray-500 uppercase mb-2">Account</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm text-gray-700">
                  Email me when someone follows me
                </Label>
                <Switch
                  defaultChecked
                  className="w-[42px] h-[24px] bg-gray-300 data-[state=checked]:bg-blue-600 rounded-full relative transition-colors"
                >
                </Switch>
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-sm text-gray-700">
                  Email me when someone answers on my post
                </Label>
                <Switch
                  className="w-[42px] h-[24px] bg-gray-300 data-[state=checked]:bg-blue-600 rounded-full relative transition-colors"
                >
                </Switch>
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-sm text-gray-700">
                  Email me when someone mentions me
                </Label>
                <Switch
                  defaultChecked
                  className="w-[42px] h-[24px] bg-gray-300 data-[state=checked]:bg-blue-600 rounded-full relative transition-colors"
                >
                </Switch>
              </div>
            </div>
          </div>

          {/* Application Section */}
          <div>
            <h3 className="text-xs font-medium text-gray-500 uppercase mb-2">Application</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm text-gray-700">New launches and projects</Label>
                <Switch
                  className="w-[42px] h-[24px] bg-gray-300 data-[state=checked]:bg-blue-600 rounded-full relative transition-colors"
                >
                </Switch>
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-sm text-gray-700">Monthly product updates</Label>
                <Switch
                  className="w-[42px] h-[24px] bg-gray-300 data-[state=checked]:bg-blue-600 rounded-full relative transition-colors"
                >
                </Switch>
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-sm text-gray-700">Subscribe to newsletter</Label>
                <Switch
                  defaultChecked
                  className="w-[42px] h-[24px] bg-gray-300 data-[state=checked]:bg-blue-600 rounded-full relative transition-colors"
                >
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
